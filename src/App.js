import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const About = lazy(() => import("./components/About"));

/*
What component we will have?

- Header
    - Logo
    - Nav Items
- Body
    - Search
    - Restaurant Container
        - Restaurant Card
- Footer
    - Links
    - Address
    - Contact
*/

const AppLayout = () => {
  return (
    <div className="app">
      {/* We can call functional component in three ways */}
      {/* {Header()} */}
      {/* OR */}
      {/* <Header></Header> */}
      {/* OR */}
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
  // {
  //     path: '/about',
  //     element: <About/>
  // },
  // {
  //     path: '/contact',
  //     element: <Contact/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

/*
// React.createElement => object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "Food Delivery App");
console.log(heading);
// JSX heading
const jsxHeading = <div>
    <h1 id='heading'>Food Delivery App using jsx</h1>
    <h2 id='heading'>Food Delivery App using jsx</h2>
</div>;
console.log(jsxHeading);


const HeadingComponent = () => {
    return <h1 className='heading'>Krishna</h1>
}

// Shorter format of above
const HeadingComponent2 = () => <h1 className='heading'>Moorthi</h1>;

// One more format
// React Functional Component
const HeadingComponent3 = () => {
    return (
    <>
        {HeadingComponent2()}
        { <HeadingComponent2 /> }
        <h1 className='heading'>Moorthi</h1>
    </>
    );
}

// React Element
const heading1 = (
    <h1 id='heading'>Food Delivery App using jsx</h1>
)

// React component composition - Its component inside a component
const HeadingComponent4 = () => {
    return (
    <div id=''>
        { <HeadingComponent /> }
        { <HeadingComponent2 /> }
        { <HeadingComponent3 /> }
        <h1 id='heading'>Food Delivery App using jsx</h1>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering React element
// root.render(heading1);

// Rendering React Component
root.render(<HeadingComponent4 />);
*/
