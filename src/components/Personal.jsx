import React from 'react';
import { GeneralPersonal } from '../styled/personal/personalMainContainers'

const Personal = ( { children }) => (
 <GeneralPersonal className="Personal">
      { children }
 </GeneralPersonal>
);
export default Personal;