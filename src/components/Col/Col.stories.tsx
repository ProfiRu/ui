import React, {useState} from 'react';
import Row from '../Row';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Col from '../Col';

export default {
  title: 'Form.Col',
  component: Col,
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <Row>
        <Col span={12} style={{background: 'lightblue'}}>
          {`span={12}`}
        </Col>
      </Row>
      <Row>
        {Array.from({length: 3}).map(() => (
          <Col span={4} style={{background: 'lightblue'}}>
            {`span={4}`}: 3 in row
          </Col>
        ))}
      </Row>
      <Row>
        {Array.from({length: 4}).map(() => (
          <Col span={3} style={{background: 'lightblue'}}>
            {`span={3}`}: 4 in row
          </Col>
        ))}
      </Row>
      <Row>
        {Array.from({length: 12}).map(() => (
          <Col span={1} style={{background: 'lightblue'}}>
            {`span={1}`}: 12 in row
          </Col>
        ))}
      </Row>
    </>
  );
};

export const Default = Template.bind({});
