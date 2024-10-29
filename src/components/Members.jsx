import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import carlosImage from "@/assets/photos/Carlos-Ruiz.jpg"
import edwinImage from "@/assets/photos/Edwin-Ojeda.jpg"
import jassyImage from "@/assets/photos/Jassy-Rivera.jpg"
import mijailImage from "@/assets/photos/Mijail-Chamorro.jpg"
import lauraImage from "@/assets/photos/Laura-Castilla.jpg"

export function Members() {
    const teamMembers = [
        {
          name: "Jassy Danisse Rivera Solís",
          institution: "Universidad Nacional de Ingeniería",
          role: "Investigadora, Ingeniera Civil, especialista en CFD, hidrología y meteorología",
          image: jassyImage,
          initials: "JR",

        },
        {
          name: "Mijail Datalí Chamorro Ríos",
          institution: "Universidad Nacional de Ingeniería",
          role: "Ingeniero Civil, especialista en geotecnia",
          image: mijailImage,
          initials: "MC",
        },
        {
          name: "Edwin Antonio Ojeda Olivares",
          institution: "Universidad Nacional de Ingeniería",
          role: "Investigador, Ingeniero Civil, especialista en conservación de recursos naturales",
          image: edwinImage,
          initials: "EO",
        },
        {
          name: "Laura Castilla",
          institution: "Universidad Nacional de Ingeniería",
          role: "Futura Arquitecta, responsable de edición de recursos digitales y marketing",
          image: lauraImage,
          initials: "LC",
        },
        {
          name: "Carlos Ruiz",
          institution: "Universidad Nacional de Ingeniería",
          role: "Futuro Ingeniero en Computación, responsable de programación de interfaz",
          image: carlosImage,
          initials: "CR",
        },
      ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Nuestro Equipo</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Conoce a los profesionales detrás de NicaraoSat
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="relative">
                <Avatar className="w-32 h-32 transition-all duration-300 ease-in-out group-hover:scale-110">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 rounded-full glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              </div>
              <CardTitle className="mt-4 text-xl font-semibold">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-primary mb-2">{member.institution}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <style jsx>{`
        .glow {
          box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  )
}