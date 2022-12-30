import VideoData from '@/data/video/VideoData'

const VideoInfo = (props: VideoInfoProps) => {

	const { data } = props
	const { currentTime, fileSize } = data


	const currentTimeMilli = currentTime * 1000
	const currentTimeMilliFormated = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(currentTimeMilli)

	const fileSizeKb = fileSize / 8;
	const fileSizeKbFormated = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8 }).format(fileSizeKb)


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
}
