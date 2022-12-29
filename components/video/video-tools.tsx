import { ChangeEvent, useState } from 'react';

import VideoData from '@/data/video/VideoData'

const VideoTools = (props: VideoToolsProps) => {

	const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.5)

	const { videoElement } = props;

	const onPlaybackSpeedChanged = (e: ChangeEvent<HTMLInputElement>) => {
		const element = e.currentTarget as HTMLInputElement
		const value = parseFloat(element.value);

		videoElement.playbackRate = value

		setPlaybackSpeed(value)
	}

	return (
		<div>
			<label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Playback Speed: {playbackSpeed}</label>
			<input type="range"
				min={0}
				max={2}
				value={playbackSpeed}
				step={0.1}
				className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				onChange={onPlaybackSpeedChanged} />
		</div>
	)
}

export default VideoTools

interface VideoToolsProps {
	readonly videoElement: HTMLVideoElement,
}
