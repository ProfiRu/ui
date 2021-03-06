import React, {useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import type {IDropdownContext} from './index';

import Dropdown from './index';
import Menu from '../Menu';
import Button from '../Button';
import {VkIcon} from '../../icons';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story = (args) => {
  const ref = useRef<IDropdownContext>();
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          height: '450px',
          flexWrap: 'wrap',
        }}
      >
        <Dropdown {...args} ref={ref}>
          <Dropdown.Toggler>
            <Button>Открыть</Button>
          </Dropdown.Toggler>
          <Dropdown.Portal>
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item
              onClick={() => ref.current?.setOpened(false)}
              rounded={false}
            >
              <VkIcon /> Пункт закрывается на нажатие
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт 3 с отбивкой снизу
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>
        <Dropdown {...args}>
          <Dropdown.Toggler>
            <Button>Открыть дропдаун</Button>
          </Dropdown.Toggler>
          <Dropdown.Portal>
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>
        <Dropdown {...args}>
          <Dropdown.Toggler>
            <Button style={{float: 'right'}}>Открыть дропдаун</Button>
          </Dropdown.Toggler>
          <Dropdown.Portal position="bottom-right">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>

        <Dropdown {...args}>
          <Dropdown.Toggler>
            <Button style={{float: 'right'}}>Открыть дропдаун</Button>
          </Dropdown.Toggler>
          <Dropdown.Portal position="bottom-right">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          height: '450px',
          flexWrap: 'wrap',
        }}
      >
        <Dropdown {...args}>
          <Dropdown.Toggler>
            <Button style={{float: 'right'}}>Открыть дропдаун</Button>
          </Dropdown.Toggler>
          <Dropdown.Portal position="top-left">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>

        <Dropdown {...args}>
          <Dropdown.Toggler>
            <Button style={{float: 'right'}}>Открыть дропдаун</Button>
          </Dropdown.Toggler>
          <Dropdown.Portal position="top-right">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>
      </div>
    </>
  );
};

export const Default = Template.bind({});

export const Without_animation = Template.bind({});
Without_animation.args = {
  animated: false,
};
