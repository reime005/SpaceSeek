import React from 'react';

import { LaunchDetailed } from '../../service/service';
import { RegularText } from '../Basic/Basic';

export const LaunchStatus = (content: LaunchDetailed) => {
  const [ms, setMs] = React.useState('');

  React.useEffect(() => {
    if (content.net) {
      const net: any = new Date(content.net);

      const calc = () => {
        const now: any = new Date();
        const distance = net - now;

        if (distance <= 0) {
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setMs(`${days}:${hours}:${minutes}:${seconds}`);
      };

      calc();

      const t = setInterval(calc, 1000);

      return () => clearInterval(t);
    }
  }, [content.net]);

  return (
    <>
      <RegularText>{ms}</RegularText>
      <RegularText>{content.status?.name || ''}</RegularText>
      <RegularText>{content.failreason || ''}</RegularText>
    </>
  );
};
