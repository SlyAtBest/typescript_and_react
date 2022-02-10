import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      alsdkf
    </ChildAsFC>
  );
};

export default Parent;
