import '~/styles/GlobalStyles.css';
import Board from '~/components/Board';
import React, { FC, ReactElement } from 'react';

import 'antd/dist/antd.css';

const App: FC = (): ReactElement => {
  return <Board />;
};

export default App;
