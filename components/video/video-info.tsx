import VideoData from '@/data/video/VideoData'

const VideoInfo = (props: VideoInfoProps) => {

	const { data } = props
	const { currentTime } = data


	const currentTimeMilli = currentTime * 1000
	const currentTimeMilliFormated = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(currentTimeMilli)

	return (
		<h1 className='text-center text-lg'>Current Time: <strong>{currentTimeMilliFormated}</strong> <small className='text-sm'>ms</small></h1>
	)
}

export default VideoInfo

interface VideoInfoProps {
	readonly data: VideoData,
}
