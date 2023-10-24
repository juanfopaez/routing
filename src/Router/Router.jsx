import { Outlet, createBrowserRouter } from "react-router-dom";

import { Contacts, Error } from "../Components";
import App from "../App";
import { About } from "../Pages/About";

export function Router() {
  const router = createBrowserRouter([
    // Root continua siendo el mismo
    {
      path: "/",
      element: <App />,
      // uso del error personalizado debe ser implementado en el path principal
      errorElement: <Error />,
    },
    /* Uso del children debe ser siempre con <Outlet /> ya que este permite rendererizar los hijos 
    directamente abajo de su padre.
    */
    {
      path: "about",
      element: (
        <div>
          About: <About />
          <>
            <Outlet />
          </>
        </div>
      ),
      children: [
        {
          path: "say-hello",
          element: <About sayHi />,
        },
      ],
    },
    // Uso de parámetros esto es diferente a anidar! mismo componente con diferentes parámetros
    {
      path: "contacts",
      element: <Contacts />,
    },
    {
      path: "contacts/:id",
      element: <Contacts />,
    },
  ]);
  return router;
}
