import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='banner'>
        <img src="/welcome.webp" alt="" className='background' />
        <div className="mask"></div>
        <h1>{"Welcome to Charlie's Hotel"}</h1>
      </section>
      <section className="info">
        <h1>⚠️ Información relevante ⚠️</h1>
        <article>
          <img src="/toallas.webp" />
          <aside>
            <h1>Las toallas están tendidas</h1>
          </aside>
        </article>
        <article className="secondary">
          <img src="/sorpresa.png" />
          <aside>
            <h1>Tenéis un regalo en la mesita de noche 🎁</h1>
          </aside>
        </article>
        <article>
          <img src="/champu.png" alt="" />
          <aside>
            <h1>El champú es la botella negra</h1>
            <h2>El gel es el azul de colonia.</h2>
          </aside>
        </article>
      </section>
      <footer>
        <h1>¿Alguna duda?</h1>
        <a href="tel:+34620957214">Llámame ❤️</a>
      </footer>
    </main>
  )
}
