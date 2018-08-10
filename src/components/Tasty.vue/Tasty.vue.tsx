import {Vue, Component} from 'vue-property-decorator';
import './Tasty.less';

@Component
export default class Tasty extends Vue {
  public render() {
    return <div class='root'>真香！</div>;
  }
}
