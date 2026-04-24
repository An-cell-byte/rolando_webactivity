import "./styles.css";

const environment = import.meta.env.VITE_PUBLIC_ENVIRONMENT || "local";
const version = import.meta.env.VITE_PUBLIC_VERSION || "dev-local";

const exposedSecrets = [
  { key: "DB_PASSWORD", value: "pass123" },
  { key: "JWT_TOKEN", value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
  { key: "API_KEY", value: "51H8fakEXAMPLE123456789abcdef" },
  { key: "JWT_SECRET", value: "my_super_secret_key_123" }
];

export default function App() {
  return (
    <main className="shell dark">
      <section className="hero danger">
        <p className="eyebrow">⚠️ Seguridad en aplicaciones</p>
        <h1>🚨 No debes exponer estos datos!!</h1>
        <p className="hero-copy">
          Esta página demuestra cómo los secretos pueden quedar expuestos en aplicaciones frontend.
        </p>
      </section>

      <section className="alert-box">
        <p>
          Esta información contiene credenciales sensibles. Exponer estos datos puede comprometer tu aplicación y tus usuarios.
        </p>
      </section>

      <section className="grid">
        <article className="card image-card">
          <img
          className="warning-image"
          src="https://m.media-amazon.com/images/M/MV5BYTNmOTUxNzItZTE0Ny00NTM0LWEzYWQtMjMxOWU5Zjk4NDAyXkEyXkFqcGc@._V1_.jpg"
          alt="warning"
          />
        </article>

        <article className="card">
          <h2>Secrets expuestos</h2>
          <table className="secrets-table">
            <thead>
              <tr>
                <th>Clave</th>
                <th>Valor expuesto</th>
              </tr>
            </thead>
            <tbody>
              {exposedSecrets.map((item) => (
                <tr key={item.key}>
                  <td className="danger-text">{item.key}</td>
                  <td className="mono">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>

      <section className="grid">
        <article className="card card-accent">
          <h2>Entorno actual</h2>
          <p className="badge">{environment}</p>
        </article>

        <article className="card">
          <h2>Versión</h2>
          <p className="mono">{version}</p>
        </article>
      </section>

      <section className="footer-warning">
        <p>
          Riesgos: acceso no autorizado, robo de identidad, pérdida de datos y compromiso total del sistema.
        </p>
      </section>
    </main>
  );
}