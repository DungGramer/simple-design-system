import Lozenge from '@molecules/lozenge/Lozenge';

const LozengeAppearance = () => {
  return (
    <>
      <div>
        <Lozenge>Default</Lozenge> <Lozenge isBold>Default</Lozenge>
      </div>
      |
      <div>
        <Lozenge appearance="success">success</Lozenge>{' '}
        <Lozenge appearance="success" isBold>
          success
        </Lozenge>
      </div>
      |
      <div>
        <Lozenge appearance="removed">removed</Lozenge>{' '}
        <Lozenge appearance="removed" isBold>
          removed
        </Lozenge>
      </div>
      |
      <div>
        <Lozenge appearance="inprogress">inprogress</Lozenge>{' '}
        <Lozenge appearance="inprogress" isBold>
          inprogress
        </Lozenge>
      </div>
      |
      <div>
        <Lozenge appearance="new">new</Lozenge>{' '}
        <Lozenge appearance="new" isBold>
          new
        </Lozenge>
      </div>
      |
      <div>
        <Lozenge appearance="moved">moved</Lozenge>{' '}
        <Lozenge appearance="moved" isBold>
          moved
        </Lozenge>
      </div>
    </>
  );
};

export default LozengeAppearance;
