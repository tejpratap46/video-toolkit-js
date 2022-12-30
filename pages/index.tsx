import { useState, createRef, RefObject } from 'react'

import Page from '@/components/page'
import FileUpload from '@/components/file/file-upload'
import VideoPlayer from '@/components/video/video-player'

const Index = () => {

	const [selectedFile, setSelectedFile] = useState<File>()

	const onFileSelected = (file: File) => {
		const type = file.type
		const size = file.size

		const fileURL = URL.createObjectURL(file)

		console.log(type, size, fileURL);

		setSelectedFile(file)
	}

	if (selectedFile) {
		return (
			<Page>
				<VideoPlayer file={selectedFile} />
			</Page>
		)
	} else {
		return (
			<Page>
				<FileUpload onFileSelected={onFileSelected} />
			</Page>
		)
	}
}

export default Index
