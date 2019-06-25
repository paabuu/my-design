import * as React from 'react';
import Button from '../components/button';
import Alert from '../components/alert';
import Affix from '../components/affix';
import Checkbox from '../components/checkbox';
import Radio from '../components/radio';

import '../components/style/index.less';
import './App.less';

const { useState } = React;
const RadioGroup = Radio.Group;

const App = () => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('r2');
    
    return (
        <div>
            {/* <Affix>
                <Button type="primary">Primary</Button>
            </Affix> */}
            {/* <Button>确认</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger" onClick={e => alert('danger!')}>Danger</Button>
            <Alert message="hahah" description="xixixixixix "></Alert>
            <Alert type="success" message="hahah" description="xixixixixix "></Alert>
            <Alert type="warning" message="hahah" description="xixixixixix "></Alert>
            <Alert type="error" message="hahah"></Alert> */}
            {/* <Checkbox 
                checked={true}
            >Checkbox</Checkbox> */}
            <RadioGroup 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                size="small"
            >
                <Radio value="r1" style={{marginRight: 10}} >Radio1</Radio>
                <Radio value="r2">Radio2</Radio>
            </RadioGroup>
        </div>
    );
};

export default App;