import ImageViewer from '../../components/image-viewer/image-viewer';
import './styles.scss'

export default {
  title: 'Components/ImageViewer',
  parameters: {
    componentSubtitle: 'ImageViewer Component'
  },
  component: ImageViewer,
  tags: ['autodocs'],
  argTypes: {
    
  },
}

export const imageViewer = {
  args: {
    items: [
        {src: 'https://t1.ea.ltmcdn.com/es/posts/7/1/5/1_conejo_de_angora_oryctolagus_cuniculus_24517_0_600.jpg'},
        {src: 'https://t1.ea.ltmcdn.com/es/posts/7/1/5/1_conejo_de_angora_oryctolagus_cuniculus_24517_0_600.jpg'}]
  }
};