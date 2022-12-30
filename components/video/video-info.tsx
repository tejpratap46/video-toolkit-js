import VideoData from '@/data/video/VideoData'

const VideoInfo = (props: VideoInfoProps) => {

	const { data, fileSize } = props
	const { currentTime } = data


	const currentTimeMilli = currentTime * 1000
	const currentTimeMilliFormated = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(currentTimeMilli)

	const fileSizeKb = fileSize / (1024);
	const fileSizeKbFormated = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(fileSizeKb)

	return (
		<>
			<h1 className='text-center text-lg'>Current Time: <strong>{currentTimeMilliFormated}</strong> <small className='text-sm'>ms</small></h1>
			<p className='text-center text-base'>Size: <strong>{fileSizeKbFormated}</strong> <small>KB</small></p>
		</>
	)
}

export default VideoInfo

interface VideoInfoProps {
	readonly data: VideoData,
	readonly fileSize: number
}
