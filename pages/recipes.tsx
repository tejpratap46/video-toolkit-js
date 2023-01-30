import Dropzone from '@/components/file/dropzone'
import Page from '@/components/page'

const Recipes = () => (
	<Page>
		<Dropzone onFileSelected={(file: File) => {
			console.log(file);
		}} />
	</Page>
)

export default Recipes
