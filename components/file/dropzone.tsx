import { ChangeEvent, useState } from 'react';
import { FileDrop } from 'react-file-drop';

const Dropzone = (onFileSelected: OnFileSelected) => {

	const [isDragging, setDragging] = useState<boolean>(false)

	return (
		<FileDrop
			onDragOver={(event) => setDragging(true)}
			onDragLeave={(event) => setDragging(false)}
			onDrop={(files, event) => {
				event.preventDefault()
				if (!files) {
					return
				}
				onFileSelected.onFileSelected(files[0])
			}}
		>
			<div className="flex items-center justify-center w-full">
				<label className="flex
				flex-col
				items-center
				justify-center
				w-full h-64 border-2
				border-gray-300
				border-dashed
				rounded-lg
				cursor-pointer
				bg-gray-50
				dark:border-gray-600
				dark:bg-gray-700
				hover:bg-gray-100
				dark:hover:bg-bray-800
				dark:hover:border-gray-500
				dark:hover:bg-gray-600">
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
						<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
							<span className="font-semibold">
								{
									isDragging ? 'Drop To Select' : 'Click to select or drag and drop'
								}
							</span>
						</p>
						<p className="text-xs text-gray-500 dark:text-gray-400">MP4, MOV, WMV, WebM, AVI, FLV, MKV or MTS</p>
					</div>
					<input type="file" className="hidden" onChange={(e: ChangeEvent<HTMLInputElement>) => {
						const element = e.currentTarget as HTMLInputElement
						const fileList: FileList | null = element.files
						const file = fileList![0]
						onFileSelected.onFileSelected(file)
					}} accept="video/*" />
				</label>
			</div>
		</FileDrop>
	);
};

export default Dropzone;

interface OnFileSelected {
	onFileSelected(file: File): void
}
