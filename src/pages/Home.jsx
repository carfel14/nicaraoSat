import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Satellite, Map, AlertTriangle, BarChart3, Layers, Cpu, Users } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import dashboardImage from '@/assets/dashboard.png'; 
import mainImage from '@/assets/main.jpg';
import logo from '@/assets/logo.svg';

export default function LandingPage() {
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true });
  const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900">
      <header className="px-4 lg:px-6 h-22 flex items-center border-b border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 sticky top-0 z-50">
        <a className="flex items-center justify-center" href="#">
          <img src={logo} className="h-20 w-20 mr-2 text-[#5386e4] dark:text-blue-400" /> 
          <span className="font-bold text-2xl text-[#5386e4] dark:text-blue-300">NicaraoSat</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-[#5386e4] dark:hover:text-blue-400 transition-colors" href="/map">Mapa Interactivo</a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-64 relative">
          <img src={mainImage} alt="Mining operation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-indigo-900/80"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Inteligencia Minera Potenciada por ML
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                NicaraoSat integra imágenes satelitales y datos de sensores in situ en tiempo real para una gestión integral del medio ambiente y de la mitigación de riesgos en las operaciones mineras.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-[#5386e4] hover:bg-blue-50 hover:text-black" >Inicia</Button>
                <Button  className="bg-white text-[#5386e4] hover:bg-blue-50 hover:text-black">Mapa Interactivo</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" ref={featuresRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#5386e4] dark:text-blue-300">
              Características Clave
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Map,
                  title: "Identificación de Sitios",
                  description: "Análisis potenciado por ML para identificar sitios mineros potenciales utilizando imágenes satelitales y datos geológicos."
                },
                {
                  icon: AlertTriangle,
                  title: "Evaluación de Riesgos",
                  description: "Análisis integral de riesgos, que incluye la predicción de deslizamientos y la evaluación del impacto ambiental."
                },
                {
                  icon: BarChart3,
                  title: "Monitoreo Ambiental",
                  description: "Monitoreo en tiempo real de la calidad del agua y del suelo para asegurar el cumplimiento ambiental y la sostenibilidad."
                }
              ].map((feature, index) => (
                <Card key={index} className={`transform transition-all duration-500 ${featuresInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <feature.icon className="h-8 w-8 mb-2 text-[#5386e4] dark:text-blue-400" />
                    <CardTitle className="text-[#5386e4] dark:text-blue-300">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="benefits" ref={benefitsRef} className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Dashboard preview"
                className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg transition-all duration-1000 ${benefitsInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                height="310"
                src={dashboardImage}
                width="550"
              />
              <div className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${benefitsInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5386e4] dark:text-blue-300">Beneficios</h2>
                <ul className="grid gap-6">
                  {[
                    {
                      title: "Mejora en la Toma de Decisiones",
                      description: "Tome decisiones basadas en datos en tiempo real, proveniente de imágenes satelitales y sensores instalados in situ."
                    },
                    {
                      title: "Mitigación de Riesgos",
                      description: "Identifique y aborde riesgos potenciales antes de que se conviertan en problemas críticos."
                    },
                    {
                      title: "Cumplimiento Ambiental",
                      description: "Asegure el cumplimiento de las regulaciones ambientales con un monitoreo y reporte continuos."
                    }
                  ].map((benefit, index) => (
                    <li key={index} className={`transition-all duration-500`} style={{ transitionDelay: `${index * 200}ms` }}>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-[#5386e4] dark:text-blue-400">{benefit.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" ref={techRef} className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-900 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#5386e4] dark:text-blue-300">
              Nuestra Tecnología
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Frontend en React",
                  description: "Interfaz amigable construida con React para una visualización e interacción de datos intuitivas."
                },
                {
                  icon: Cpu,
                  title: "Análisis Potenciado por ML",
                  description: "Modelos avanzados de aprendizaje automático para una identificación precisa de sitios y evaluación de riesgos."
                },
                {
                  icon: Satellite,
                  title: "Integración de Satélites",
                  description: "Integración fluida de imágenes satelitales con datos de sensores in situ para un análisis integral."
                }
              ].map((tech, index) => (
                <Card key={index} className={`transform transition-all duration-500 ${techInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <tech.icon className="h-8 w-8 mb-2 text-[#5386e4] dark:text-blue-400" />
                    <CardTitle className="text-[#5386e4] dark:text-blue-300">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`flex flex-col items-center space-y-4 text-center transition-all duration-1000 ${aboutInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Users className="h-16 w-16 text-amber-600 dark:text-amber-400" />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-700 dark:text-amber-300">Acerca de Nosotros</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                NicaraoSat es una empresa conformada por expertos en teledetección, inteligencia artificial, machine learning y ciencias ambientales.
                 Nuestra misión es revolucionar la industria minera al proporcionar soluciones innovadoras que permiten a nuestros clientes una extracción 
                de recursos sostenible y responsable a corto y largo plazo.
                </p>
              </div>
              <Button className="bg-amber-600 text-white hover:bg-amber-700">Conoce a nuestro equipo</Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                ¿Listo para Transformar Sus Operaciones Mineras?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Póngase en contacto con nuestro equipo para descubrir cómo NicaraoSat puede revolucionar sus procesos de gestión ambiental y de riesgos.
                </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 bg-white dark:bg-gray-800" placeholder="Ingresa tu correo" type="email" />
                <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">Suscríbete</Button>
                </form>
                <p className="text-xs text-gray-200">
                Al suscribirse, acepta nuestros Términos de Servicio y Política de Privacidad.
                </p>
            </div>
            </div>
        </div>
        </section>



      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-xs text-gray-800 dark:text-gray-300">© 2024 NicaraoSat. Todos los derechos reservados.</p>
        </footer>

    </div>
  );
}
