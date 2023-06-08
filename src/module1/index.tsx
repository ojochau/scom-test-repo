import { Module, Button, customModule, application } from '@ijstech/components';
@customModule
export default class Module1 extends Module {
    button1: Button;
    render(){
        return <i-panel>
            <i-button id="button1" caption="Button 1" top={10}></i-button>
        </i-panel>
    }
}