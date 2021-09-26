import * as e from "@element-react-next/components";

const Row = e.Row;
const Button = e.Button;

export default (props) => {
  return (
    <>
      <Row>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </Row>

      <Row>
        <Button plain>Plain</Button>
        <Button type="primary" plain>
          Primary
        </Button>
        <Button type="success" plain>
          Success
        </Button>
        <Button type="info" plain>
          Info
        </Button>
        <Button type="warning" plain>
          Warning
        </Button>
        <Button type="danger" plain>
          Danger
        </Button>
      </Row>

      <Row>
        <Button round>Round</Button>
        <Button type="primary" round>
          Primary
        </Button>
        <Button type="success" round>
          Success
        </Button>
        <Button type="info" round>
          Info
        </Button>
        <Button type="warning" round>
          Warning
        </Button>
        <Button type="danger" round>
          Danger
        </Button>
      </Row>

      <Row>
        <Button icon="el-icon-search" circle></Button>
        <Button type="primary" icon="el-icon-edit" circle></Button>
        <Button type="success" icon="el-icon-check" circle></Button>
        <Button type="info" icon="el-icon-message" circle></Button>
        <Button type="warning" icon="el-icon-star-off" circle></Button>
        <Button type="danger" icon="el-icon-delete" circle></Button>
      </Row>
    </>
  );
};
