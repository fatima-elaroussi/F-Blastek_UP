import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Professional from "../pages/professional/Professional";
import AddProfessional from "../pages/professional/AddProfessional";
import LoginForm from "../components/common/LoginForm";
import EditProfessionalPage from "../pages/professional/EditProfessionalPage";

const router = createBrowserRouter([
  {
    path: "/backoffice",
    element: <AdminLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: (
          <div>
            Dashboard: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus at placeat porro quidem nihil. Eos quibusdam modi cumque
            illo corrupti, eum inventore placeat consequatur. Est labore quas ut
            praesentium voluptatum.
          </div>
        ),
      },
      {
        path: "professionals",
        element: <Professional />,
      },
      {
        path: "professionals/create",
        element: <AddProfessional />,
      },
      {
        path: "professionals/edit/:id",
        element: <EditProfessionalPage />,
      },
      {
        path: "services",
        element: <div>Services</div>,
      },
      {
        path: "services/create",
        element: <div>Categories</div>,
      },
      {
        path: "services/edit/:id",
        element: <div>Categories</div>,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
