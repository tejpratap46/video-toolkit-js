import { useState, createRef, RefObject } from 'react'

import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => {
	const videoPlayerRef: RefObject<HTMLVideoElement> = createRef();


	return (
		<Page>
			<Section>
				<div className=" container m-auto grid grid-cols-2">
					<div className='mt-2'>
						<video className='w-full' style={{height: '60vh'}} controls autoPlay ref={videoPlayerRef}>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</Section>
		</Page>
	)
}

export default Index
