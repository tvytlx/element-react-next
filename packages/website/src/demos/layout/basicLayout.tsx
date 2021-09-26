import * as e from "@element-react-next/components";
import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";

const Row = styled(e.Row)`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Col = styled(e.Col)`
  border-radius: 4px;
`;
const grid = css`
  border-radius: 4px;
  min-height: 36px;
`;
const bgPurpleDark = css({
  background: "#99a9bf",
});
const bgPurple = css({
  background: "#d3dce6",
});
const bgPurpleLight = css({
  background: "#e5e9f2",
});

export default (props) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className={cx(grid, bgPurpleDark)}></div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={12}>
          <div className={cx(grid, bgPurpleLight)}></div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={8}>
          <div className={cx(grid, bgPurpleLight)}></div>
        </Col>
        <Col span={8}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={6}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={6}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={6}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={4}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={4}>
          <div className={cx(grid, bgPurpleLight)}></div>
        </Col>
        <Col span={4}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={4}>
          <div className={cx(grid, bgPurpleLight)}></div>
        </Col>
        <Col span={4}>
          <div className={cx(grid, bgPurple)}></div>
        </Col>
        <Col span={4}>
          <div className={cx(grid, bgPurpleLight)}></div>
        </Col>
      </Row>
    </>
  );
};
