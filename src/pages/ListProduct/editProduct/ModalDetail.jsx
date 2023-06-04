import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import './ModalDetail.less';
import { product } from '@/assets';
import { useState } from 'react';
import { editProduct } from '../handal';
import ImgCourse from '@/components/img';
const { TextArea } = Input;
const FormProduct = ({ info }) => {
  const [open, setOpen] = useState(true);
  const onFinish = (values) => {
    editProduct(info?.id, {
      ...values,
      category_id: info?.category_id,
    });
  };
  return (
    <>
      <div className="BodyBanner">
        <div className="imgBanner">
          {info?.image ? (
            <img style={{ maxWidth: '100%' }} src={info?.image} alt="logo" />
          ) : (
            <img style={{ maxWidth: '100%' }} src={product} alt="logo" />
          )}
        </div>
        <Form
          layout="vertical"
          disabled={open}
          onFinish={onFinish}
          initialValues={{
            name: info?.name,
            status: info?.status,
            price_in: info?.price_in,
            price_sell: info?.price_sell,
            quantity: info?.quantity,
            quantity_sold: info?.quantity_sold,
            content: info?.content,
            discout: info?.discout,
          }}
        >
          <Row className="myRow">
            <Col span={11}>
              <Form.Item
                style={{ marginRight: '24px' }}
                label="Tên"
                name="name"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={13}>
              <Form.Item label="Trạng thái" name="status">
                <Select>
                  <Select.Option value={true}>Hiển thị</Select.Option>
                  <Select.Option value={false}>Ẩn</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row className="myRow">
            <Col span={11}>
              <Form.Item
                style={{ marginRight: '24px' }}
                label="Giá nhập"
                name="price_in"
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={13}>
              <Form.Item label="Giá bán" name="price_sell">
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="myRow">
            <Col span={11}>
              <Form.Item
                style={{ marginRight: '24px' }}
                label="số lượng tồn"
                name="quantity"
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={13}>
              <Form.Item label="sô lượng đã bán" name="quantity_sold">
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Giảm giá" name="discout">
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Mô tả" name="content">
            <TextArea rows={4} />
          </Form.Item>

          {open ? (
            <Button onClick={() => setOpen(false)} disabled={false}>
              Chỉnh sửa
            </Button>
          ) : (
            <>
              <Button onClick={() => setOpen(true)} disabled={false}>
                close
              </Button>
              <Button disabled={false} type="primary" htmlType="submit">
                Lưu
              </Button>
            </>
          )}
        </Form>
      </div>
    </>
  );
};
export const detailproduct = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <FormProduct info={info} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
