import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/crypo.jpeg'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Crytoverse</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'></Button> */}
        </div>
        <Menu theme='dark'>
            <Menu.Item key='home' icom={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='cryptocurencies' icom={<FundOutlined />}>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item key='exchanges' icom={<MoneyCollectOutlined />}>
                <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item key='news' icom={<BulbOutlined />}>
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar