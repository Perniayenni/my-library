import './styles.scss'
import LazyImage from '../../components/lazy-image/src/lazy-image'

export default {
  title: 'Components/LazyImage',
  parameters: {
    componentSubtitle: 'LazyImage Component'
  },
  component: LazyImage,
  tags: ['autodocs'],
  argTypes: {
    loader: {
      description: 'The content or component to be displayed while the image is being loaded. Defaults to the text "Loading...',
    },
    url: {
      description: 'The URL of the image to be loaded.',
    },
    loaderDuration: {
      description: 'The duration in milliseconds during which the loader will be shown before displaying the loaded image. If not provided, the loader will be hidden as soon as the image is loaded'
    },
    additionalClassName: {
      description: 'An additional class to customize the styling of the LazyImage component.'
    },
    with: {
      description: 'String that change size image'
    }
  },
}

export const loader = {
  args: {
    url: 'https://t1.ea.ltmcdn.com/es/posts/7/1/5/1_conejo_de_angora_oryctolagus_cuniculus_24517_0_600.jpg',
    width: '300',
    loaderDuration: '1000',
    loader: 'this is liading... wait'
  }
};