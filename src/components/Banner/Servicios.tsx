import Image from "next/image";

export function Servicios() {
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 font-Nunito">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-cyan-600">J·Barber</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros servicios</p>
      <p className="mt-6 text-lg leading-8 text-gray-600">Descubre el placer de un corte de cabello o afeitado que va más allá de lo estético, no solo te cortamos el pelo, te transformamos. Desde el diagnóstico profesional hasta el último detalle, nos aseguramos de que salgas no solo luciendo bien, sino sintiéndote aún mejor.</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
              <svg width="25px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25239 18.4585C7.46121 19.7642 7.10668 21 5.7 21C4.20883 21 3 19.7566 3 18.2227C3 16.6888 4.20883 15.4454 5.7 15.4454C7.09933 15.4454 8.25002 16.5404 8.38646 17.9428C8.40415 18.1247 8.34638 18.3034 8.25239 18.4585ZM8.25239 18.4585L10.2 14.9825M15.7476 18.4585C16.5388 19.7642 16.8933 21 18.3 21C19.7912 21 21 19.7566 21 18.2227C21 16.6888 19.7912 15.4454 18.3 15.4454C16.9007 15.4454 15.75 16.5404 15.6135 17.9428C15.5958 18.1247 15.6536 18.3034 15.7476 18.4585ZM15.7476 18.4585L7.0925 3.34577C6.85481 2.93012 6.28605 2.88822 5.99319 3.26477C4.28916 5.4558 4.45923 8.61442 6.38806 10.5985L15.7476 18.4585ZM11.9506 11.8285L16.9041 3.33473C17.1444 2.92277 17.7104 2.88361 18.0021 3.25876C19.7088 5.45321 19.5385 8.61677 17.6066 10.6039L16.5 11.7423" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            Cortes
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Los estilos de cortes se realizan de acuerdo a la evaluación previa con el cliente, el uso de tijera, maquina o navaja se aplican de acuerdo a la selección única.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
              <svg width="23px" height="70px" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="white">
                <path d="m24,0h-1c0,1.056-.633,1.544-1.196,1.773-.257-.459-.742-.773-1.304-.773-.651,0-1.201.419-1.408,1H3.858c-1.765,0-3.258,1.321-3.474,3.072L.024,8h12.225c1.778,0,3.272-1.332,3.477-3.099l.22-1.901h3.037c-.182,4.555-2.809,11.556-7.118,15.893-1.162,1.177-1.149,3.081.028,4.243.583.576,1.346.863,2.107.863.774,0,1.549-.297,2.135-.891,5.559-5.632,5.855-18.284,5.865-20.345,1.257-.434,2-1.438,2-2.763Zm-9.267,4.787c-.146,1.262-1.213,2.213-2.483,2.213H1.155l.222-1.806c.154-1.251,1.221-2.194,2.481-2.194h11.081l-.206,1.787Zm.69,17.618c-.774.785-2.044.793-2.828.019-.785-.774-.793-2.043-.02-2.827,4.823-4.854,7.425-12.431,7.425-17.096,0-.276.224-.5.5-.5s.5.224.5.5v.005c.001.141.064,14.186-5.577,19.9Zm-.423-1.405c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z" stroke="#ffffff"/>
              </svg>
            </div>
            Afeitado
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">El uso de afeitado se realiza en total concordancia con los estandares del cliente. El uso de la electric shaver o solo navaja, ademas la suma de tecnicas de perfilado para un mejor acabado.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
              <svg width="25px" height="70px" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="m18.5,18h-.5V6h.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-.59c-.478-2.833-2.942-5-5.91-5s-5.431,2.167-5.91,5h-.59c-.276,0-.5.224-.5.5s.224.5.5.5h.5v12h-.5c-.276,0-.5.224-.5.5s.224.5.5.5h.59c.478,2.833,2.942,5,5.91,5s5.431-2.167,5.91-5h.59c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-3.793,0l-7.707-7.707v-2.586l10,10v.293h-2.293Zm-4,0l-3.707-3.707v-2.586l6.293,6.293h-2.586Zm2.586-12l3.707,3.707v2.593l-6.35-6.3h2.643Zm-4.063,0l7.77,7.708v2.585L7,6.293v-.293h2.23Zm7.77,2.293l-2.293-2.293h2.293v2.293ZM12,1c2.414,0,4.434,1.721,4.899,4H7.101c.465-2.279,2.484-4,4.899-4Zm-5,14.707l2.293,2.293h-2.293v-2.293Zm5,7.293c-2.414,0-4.434-1.721-4.899-4h9.798c-.465,2.279-2.484,4-4.899,4Z" stroke="#ffffff"/>
              </svg>
            </div>
            Color y Tratamientos
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Nuestro excelso gusto por el seguimiento de las tendencias de las últimas temporadas hacen que tengamos excelentes referencias. Utilizamos solo los mejores productos para tu piel y cabello. En J-Barber, calidad y estilo van de la mano.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
              <svg width="25" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M16 1C16.5523 1 17 1.44772 17 2V3H22V9H19.9813L22.7271 16.5439C22.9033 16.9948 23 17.4856 23 17.999C23 20.2082 21.2091 21.999 19 21.999C17.1365 21.999 15.5707 20.7247 15.1263 19H10.874C10.4299 20.7252 8.86384 22 7 22C5.05551 22 3.43508 20.6125 3.07474 18.7736C2.43596 18.4396 2 17.7707 2 17V7C2 6.44772 2.44772 6 3 6H10C10.5523 6 11 6.44772 11 7V12C11 12.5523 11.4477 13 12 13H14C14.5523 13 15 12.5523 15 12V3H12V1H16ZM7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16ZM19 15.999C17.8954 15.999 17 16.8944 17 17.999C17 19.1036 17.8954 19.999 19 19.999C20.1046 19.999 21 19.1036 21 17.999C21 17.7587 20.9576 17.5282 20.8799 17.3148L20.8635 17.2714C20.5725 16.5266 19.8479 15.999 19 15.999ZM17.853 9H17V12C17 13.6569 15.6569 15 14 15H12C10.3431 15 9 13.6569 9 12H4V15.3542C4.73294 14.5238 5.80531 14 7 14C8.86384 14 10.4299 15.2748 10.874 17H15.1258C15.5695 15.2743 17.1358 13.999 19 13.999C19.2368 13.999 19.4688 14.0196 19.6943 14.0591L17.853 9ZM9 8H4V10H9V8ZM20 5H17V7H20V5Z"></path></svg>
            </div>
            Delivery Scissor
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Dentro de nuestros servicios se encuentra disponible la opcion de `Delivery Scissor`, en donde nos trasladamos a tu domicilio para poder brindarte nuestra atención.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

  );
}