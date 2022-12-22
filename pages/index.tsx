import { useState, createRef, RefObject } from 'react'

import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => {
	const videoPlayerRef: RefObject<HTMLVideoElement> = createRef();

	const onFileSelected = (e: any) => {
		const file = e.target.files[0]
		const type = file.type

		const fileURL = URL.createObjectURL(file)

		videoPlayerRef.current!.src = fileURL

		console.log(fileURL);
	}

	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
					<input type="file" name="video file" id="video-file" onChange={onFileSelected} accept="video/*" />
				</h2>

				<div className='mt-2'>
					<video className="w-full" controls autoPlay ref={videoPlayerRef}>
						Your browser does not support the video tag.
					</video>
				</div>
			</Section>
		</Page>
	)
}

export default Index
