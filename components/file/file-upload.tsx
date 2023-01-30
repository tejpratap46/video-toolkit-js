import { ChangeEvent } from 'react'
import DropZone from '@/components/file/dropzone'
import Section from '@/components/section'

const FileUpload = (props: FileUploadProps) => {

	const onFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
		const element = e.currentTarget as HTMLInputElement
		const fileList: FileList | null = element.files
		const file = fileList![0]
		props.onFileSelected(file)
	}

	if (props.isSmall) {
		return (
			<Section>
				<input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
					type="file"
					onChange={onFileSelected}
					accept="video/*" />
			</Section>
		)
	} else {
		return (
			<Section>
				<DropZone onFileSelected={(file: File) => {
					props.onFileSelected(file)
				}} />
			</Section>
		)
	}
}

export default FileUpload

interface FileUploadProps {
	readonly isSmall?: boolean
	onFileSelected(file: File): void
}
