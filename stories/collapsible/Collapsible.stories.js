import Collapsible from '../../components/collapsible';
import './styles.scss'

export default {
    title: 'Components/Collapsible',
    component: Collapsible,
    tags: ['autodocs']
  };
  
export const collapsible = {
  render: ({ collapsibleTitle, children }) => (
    <Collapsible collapsibleTitle={collapsibleTitle}>
      {children}
    </Collapsible>
  ),
  args: {
    collapsibleTitle: 'This is a text, but can be a node',
    children: <label>children content when is open</label>
  }
}
