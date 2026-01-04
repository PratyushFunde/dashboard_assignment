import React, { useState } from 'react';
import { Table, Input, Avatar, Space, Checkbox } from 'antd';
import {
    PlusOutlined,
    FilterOutlined,
    SwapOutlined,
    SearchOutlined,
    CalendarOutlined,
} from '@ant-design/icons';

const statusConfig = {
    'In Progress': { color: '#8B8DFF' },
    Complete: { color: '#52C41A' },
    Pending: { color: '#69C0FF' },
    Approved: { color: '#FFC53D' },
    Rejected: { color: '#BFBFBF' },
};

const columns = [
    {
        title: <span className="text-xs font-normal text-(--muted)">
            Order ID
        </span>,
        dataIndex: 'orderId',
        key: 'orderId',
        render: (text) => <span className="font-medium">{text}</span>,
    },
    {
        title: <span className="text-xs font-normal text-(--muted)">
            User
        </span>,
        dataIndex: 'user',
        key: 'user',
        render: (user) => (
            <Space>
                <Avatar src={user.avatar} size={28} />
                <span>{user.name}</span>
            </Space>
        ),
    },
    {
        title: <span className="text-xs font-normal text-(--muted)"> Project</span>,
        dataIndex: 'project',
        key: 'project',
    },
    {
        title: <span className="text-xs font-normal text-(--muted)"> Address  </span>,
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: <span className="text-xs font-normal text-(--muted)"> Date</span>,
        dataIndex: 'date',
        key: 'date',
        render: (date) => (
            <Space>
                <CalendarOutlined />
                {date}
            </Space>
        ),
    },
    {
        title: <span className="text-xs font-normal text-(--muted)"> Status</span>,
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
            <Space>
                <span
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: statusConfig[status].color,
                        display: 'inline-block',
                    }}
                />
                <span style={{ color: statusConfig[status].color }}>
                    {status}
                </span>
            </Space>
        ),
    },
];

const dataSource = [
    {
        key: 1,
        orderId: '#CM9801',
        user: { name: 'Natali Craig', avatar: 'https://i.pravatar.cc/40?img=1' },
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: 'In Progress',
    },
    {
        key: 2,
        orderId: '#CM9802',
        user: { name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/40?img=2' },
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: 'Complete',
    },
    {
        key: 3,
        orderId: '#CM9803',
        user: { name: 'Drew Cano', avatar: 'https://i.pravatar.cc/40?img=3' },
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: 'Pending',
    },
    {
        key: 4,
        orderId: '#CM9804',
        user: { name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/40?img=4' },
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: 'Approved',
        checked: true,
    },
    {
        key: 5,
        orderId: '#CM9805',
        user: { name: 'Andi Lane', avatar: 'https://i.pravatar.cc/40?img=5' },
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: 'Rejected',
    },
];

const OrderList = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    return (
        <div className="rounded-2xl bg-(--bg) p-5">
            {/* Header */}
            <div className="mb-4 flex flex-col gap-3 justify-between">
                <h3 className="text-lg font-semibold">Order List</h3>
                <div className="search_filter flex justify-between rounded  bg-[#F7F9FB] dark:bg-[#272727] py-3 px-2">
                    <div className="left_icons flex gap-5">
                        <button>
                            <PlusOutlined />
                        </button>
                        <button className="">
                            <FilterOutlined />
                        </button>
                        <button className="">
                            <SwapOutlined />
                        </button>
                    </div>

                    <div className="input_search">
                        <Input
                            size="small"
                            placeholder="Search"
                            prefix={<SearchOutlined  style={{ color: 'var(--muted)' }} className="text-(--muted) ml-2" />}
                            className=''
                        />
                    </div>
                </div>

            </div>


            {/* Table */}
            <Table
                className="order-list-table"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 5 }}
                rowKey="key"
                size="middle"
                style={{
                    fontFamily: 'Inter',
                    backgroundColor: 'var(--bg)'
                }}
            />
        </div>
    );
}

export default OrderList