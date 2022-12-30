import { useState, useEffect, useCallback, useRef } from 'react'

import VideoData from '@/data/video/VideoData'
import VideoInfo from './video-info'
import VideoTools from './video-tools'
import Section from '@/components/section'

const VideoPlayer = (props: VideoPlayerProps) => {

	const videoPlayerRef = useRef<HTMLVideoElement>(null)
	const [videoData, setVideoData] = useState<VideoData>(new VideoData())
	const { file, url } = props
	const fileSize = file?.size || 0

	let videoElement = <></>

	if (file) {
		const type = file.type

		const fileURL = URL.createObjectURL(file)

		videoElement = <video ref={videoPlayerRef} style={{ height: '60vh' }} className="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" controls autoPlay>
			<source src={fileURL} type={type} />
			Your browser does not support the video tag.
		</video>
	} else if (url) {
		videoElement = <video ref={videoPlayerRef} style={{ height: '60vh' }} className="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" controls autoPlay>
			<source src={url} />
			Your browser does not support the video tag.
		</video>
	}

	const onVideoFrame = useCallback(() => {
		const { current } = videoPlayerRef;
		if (!current) {
			return;
		}

		const data = new VideoData();
		data.currentTime = current.currentTime

		setVideoData(data)
	}, []);

	useEffect(() => {
		const { current } = videoPlayerRef;

		if (!current) {
			return;
		}

		if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
			// The API is supported! 🎉

			let handle = 0;
			const callback = () => {
				onVideoFrame();
				handle = current?.requestVideoFrameCallback(callback);
			};

			callback();

			return () => {
				current?.cancelVideoFrameCallback(handle);
			};
		}
	}, [onVideoFrame]);

	return (
		<Section>
			<div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
				<a>
					{videoElement}
				</a>
				<div className="p-5">
					<VideoInfo data={videoData} fileSize={fileSize} />
					<VideoTools videoElement={videoPlayerRef.current!} />
				</div>
			</div>
		</Section>
	)
}

export default VideoPlayer

interface VideoPlayerProps {
	readonly url?: string,
	readonly file?: File
}
