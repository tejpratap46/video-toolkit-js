import Section from '@/components/section'

const VideoPlayer = (props: VideoPlayerProps) => {

	const { file, url } = props

	let videoElement = <></>

	if (file) {
		const type = file.type
		const size = file.size

		const fileURL = URL.createObjectURL(file)

		return (
				videoElement = <video className="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" controls>
					<source src={fileURL} type={type} />
					Your browser does not support the video tag.
				</video>
		)
	} else if (url) {
		return (
				videoElement = <video className="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" controls>
					<source src={url} />
					Your browser does not support the video tag.
				</video>
		)
	}

	return (
		<Section>
			<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					{videoElement}
				</a>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
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
