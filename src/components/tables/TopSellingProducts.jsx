import React from 'react'
import { Table, Card } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span className="font-normal">{text}</span>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
];

const dataSource = [
    {
        key: '1',
        name: 'ASOS Ridley High Waist',
        price: '$79.49',
        quantity: 82,
        amount: '$6,518.18',
    },
    {
        key: '2',
        name: 'Marco Lightweight Shirt',
        price: '$128.50',
        quantity: 37,
        amount: '$4,754.50',
    },
    {
        key: '3',
        name: 'Half Sleeve Shirt',
        price: '$39.99',
        quantity: 64,
        amount: '$2,559.36',
    },
    {
        key: '4',
        name: 'Lightweight Jacket',
        price: '$20.00',
        quantity: 184,
        amount: '$3,680.00',
    },
    {
        key: '5',
        name: 'Marco Shoes',
        price: '$79.49',
        quantity: 64,
        amount: '$1,965.81',
    },
];


const TopSellingProducts = () => {
    return (<Card
        title="Top Selling Products"
        bordered={false}
        style={{
            borderRadius: 16,
            backgroundColor: 'var(--card)',
            fontWeight: '600',
            fontFamily: 'Inter',
            color:'var(--text)'
        }}
    >
        <Table
            className="top-selling-table"
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            rowKey="key"
            size="middle"
            style={{
                background: 'var(--card)',
                fontWeight: '400',
                fontFamily: 'Inter'
            }}
        />
    </Card>
    )
}

export default TopSellingProducts