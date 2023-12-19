import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Checkbox, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const EvlCharmnEvl03 = () => {
  const [ojtEvlTbl, setOjtEvlTbl] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
  });

  const evlDataInqClick = () => {
    Modal.info({ title: 'EvlDataInqClick' });
  };

  const saveClick = () => {
    Modal.info({ title: 'saveClick' });
  };

  useEffect(() => {
    console.log('ojtEvlTbl: ', ojtEvlTbl);
  }, [ojtEvlTbl]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>심사 평가표</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={evlDataInqClick}
          >
            평가참고자료조회
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'EvlCharmnEvl03'} // 각 테이블마다 고유 키 입력
            className="eu-usr-custom-description-table" // 고정
            summary="심사 평가표"
          >
            <thead>
              <tr>
                <td className={'header'} colSpan="9">
                  과제명: TEST 과제
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={'header'} colSpan="4">
                  평가문항
                </td>
                <td className={'header'} colSpan="5">
                  평가항목
                </td>
              </tr>
              <tr>
                <td rowSpan="10">평가표 명</td>
                <td rowSpan="4">대문항1 (30점)</td>
                <td colSpan="2" rowSpan="2">
                  {'상세 문항 1 (1'}
                </td>
                <td className="header">{'A(10)'}</td>
                <td className="header">{'B(8)'}</td>
                <td className="header">{'C(6)'}</td>
                <td className="header">{'D(4)'}</td>
                <td className="header">{'E(2)'}</td>
              </tr>
              <tr>
                <td>
                  <Checkbox
                    value="1"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.a === '1'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="2"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.a === '2'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="3"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.a === '3'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="4"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.a === '4'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="5"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.a === '5'}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="2">
                  {'상세 문항 2 (2'}
                </td>
                <td className="header">{'A(20)'}</td>
                <td className="header">{'B(16)'}</td>
                <td className="header">{'C(12)'}</td>
                <td className="header">{'D(8)'}</td>
                <td className="header">{'E(4)'}</td>
              </tr>
              <tr>
                <td>
                  <Checkbox
                    value="1"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'b', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.b === '1'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="2"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'b', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.b === '2'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="3"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'b', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.b === '3'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="4"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'b', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.b === '4'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="5"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'b', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.b === '5'}
                  />
                </td>
              </tr>
              <tr>
                <td rowSpan="4">대문항2 (20점)</td>
                <td colSpan="2" rowSpan="2">
                  {'상세 문항3 (1'}
                </td>
                <td className="header">{'A(10)'}</td>
                <td className="header">{'B(8)'}</td>
                <td className="header">{'C(6)'}</td>
                <td className="header">{'D(4)'}</td>
                <td className="header">{'E(2)'}</td>
              </tr>
              <tr>
                <td>
                  <Checkbox
                    value="1"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'c', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.c === '1'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="2"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'c', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.c === '2'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="3"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'c', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.c === '3'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="4"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'c', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.c === '4'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="5"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'c', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.c === '5'}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="2">
                  {'상세 문항4 (1'}
                </td>
                <td className="header">{'A(10)'}</td>
                <td className="header">{'B(8)'}</td>
                <td className="header">{'C(6)'}</td>
                <td className="header">{'D(4)'}</td>
                <td className="header">{'E(2)'}</td>
              </tr>
              <tr>
                <td>
                  <Checkbox
                    value="1"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'd', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.d === '1'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="2"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'd', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.d === '2'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="3"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'd', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.d === '3'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="4"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'd', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.d === '4'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="5"
                    onChange={(e) =>
                      ojtChange(e.target.value, 'd', setOjtEvlTbl)
                    }
                    checked={ojtEvlTbl?.d === '5'}
                  />
                </td>
              </tr>
              <tr>
                <td rowSpan="2">대문항3 (50점)</td>
                <td colSpan="2" rowSpan="2">
                  {'상세 문항5 (5'}
                </td>
                <td className="header">{'A(50)'}</td>
                <td className="header">{'B(45)'}</td>
                <td className="header">{'C(40)'}</td>
                <td className="header">{'D(35)'}</td>
                <td className="header">{'E(30)'}</td>
              </tr>
              <tr>
                <td>
                  <Checkbox
                    value="1"
                    onChange={(e) => ojtChange(e.target.value, 'e')}
                    checked={ojtEvlTbl?.e === '1'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="2"
                    onChange={(e) => ojtChange(e.target.value, 'e')}
                    checked={ojtEvlTbl?.e === '2'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="3"
                    onChange={(e) => ojtChange(e.target.value, 'e')}
                    checked={ojtEvlTbl?.e === '3'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="4"
                    onChange={(e) => ojtChange(e.target.value, 'e')}
                    checked={ojtEvlTbl?.e === '4'}
                  />
                </td>
                <td>
                  <Checkbox
                    value="5"
                    onChange={(e) => ojtChange(e.target.value, 'e')}
                    checked={ojtEvlTbl?.e === '5'}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default EvlCharmnEvl03;
