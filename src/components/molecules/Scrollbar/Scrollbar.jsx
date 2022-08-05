import { forwardRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const Scrollbar = forwardRef((props, ref) => {
  const { children, ...other } = props;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      globalThis?.navigator?.userAgent
    );

  if (isMobile) {
    return (
      <div ref={ref} style={{ overflowX: "auto" }}>
        {children}
      </div>
    );
  }

  return (
    <PerfectScrollbar ref={ref} {...other}>
      {children}
    </PerfectScrollbar>
  );
});

export default Scrollbar;
