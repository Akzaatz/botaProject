import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import Card from "../card/Card";

const ResponsiveGridLayout = WidthProvider(Responsive);

const generateLayouts = (products) => {
  const layouts = { lg: [], md: [], sm: [], xs: [], xxs: [] };
  products.forEach((product, index) => {
    layouts.lg.push({
      i: index.toString(),
      x: index % 3,
      y: Math.floor(index / 3),
      w: 1,
      h: 1,
    });
    layouts.md.push({
      i: index.toString(),
      x: index % 3,
      y: Math.floor(index / 3),
      w: 1,
      h: 1,
    });
    layouts.sm.push({
      i: index.toString(),
      x: index % 2,
      y: Math.floor(index / 2),
      w: 1,
      h: 1,
    });
    layouts.xs.push({ i: index.toString(), x: 0, y: index, w: 1, h: 1 });
    layouts.xxs.push({ i: index.toString(), x: 0, y: index, w: 1, h: 1 });
  });
  return layouts;
};

const ResponsiveGridLayoutComponent = ({ products }) => {
  const layouts = generateLayouts(products);

  return (
    <ResponsiveGridLayout
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
      rowHeight={620}
      margin={[10, 10]}
      isResizable={false}
      isDraggable={false}
    >
      {products.map((product, index) => (
        <div
          key={index}
          data-grid={{ x: index % 3, y: Math.floor(index / 3), w: 1, h: 1 }}
        >
          <Card product={product} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default ResponsiveGridLayoutComponent;
