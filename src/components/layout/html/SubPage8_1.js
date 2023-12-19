import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, Pagination,
  Table, Tag, Modal, Descriptions } from "antd";
import { DownloadOutlined, } from "@ant-design/icons";

import DummyImg1 from "css/images/user-icons/user-dummy-img/dummy-1.png";
import { Link } from "react-router-dom";

const SubPage8_1 = ({ dataImage }) => {

  return(
    <>
      {/* START UP tab */}
      {/* 홍보관 > 우수구축사례 > START UP */}

      <Row>
        <Col span={24}>

          <div className="eu-case-card-wrap grid-col-4 gap-col-20 gap-row-46">
            {dataImage.map((obj, index) => {
              return(
                <Link className="eu-case-cards" to={"/"}>
                  <div className="card-img" key={obj.imgPath}>
                    {(obj.imgPath === undefined || obj.imgPath === '') ? null
                      : <img src={require(`css/images/user-icons/user-dummy-img/dummy-${index + 1}.png`)} alt="업체이미지" />
                    }
                  </div>
                  <div className="case-card-text flex-col">
                    <div className="tit mb-6">{obj.tit}</div>
                    <div className="text">{obj.text}</div>
                  </div>
                </Link>
              )
            })}
          </div>

          <Pagination total={1000} className="mt-60 text-c" showSizeChanger={false} />

        </Col>
      </Row>

    </>
  )
}

export default SubPage8_1;