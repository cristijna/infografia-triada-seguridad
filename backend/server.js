const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const triadaData = [
  { 
    id: 1, 
    pilar: "Confidencialidad", 
    icono: "🔒",
    descripcion: "Previene la divulgación no autorizada, asegurando que solo las personas permitidas tengan acceso a los datos.",
    analogia: "Como un diario de vida con candado: solo tú tienes la llave para leerlo.",
    amenaza: "Que personas malintencionadas engañen a los usuarios para robar sus contraseñas o espíen las comunicaciones de internet para copiar información privada.",
    controles: [
      "Convertir la información en códigos secretos para que solo quien tenga la clave pueda leerla.",
      "Asignar permisos estrictos para que cada trabajador solo vea los datos que necesita para su puesto.",
      "Aplicar reglas que obligan a revisar y comprobar constantemente la identidad de quien entra al sistema."
    ]
  },
  { 
    id: 2, 
    pilar: "Integridad", 
    icono: "🛡️",
    descripcion: "Garantiza que la información sea precisa, completa y no haya sido alterada de forma no autorizada.",
    analogia: "Como una carta sellada con cera: si el sello está roto, sabes que alguien la abrió y modificó el mensaje.",
    amenaza: "Que un virus informático, un intruso o incluso un empleado por accidente borre o modifique archivos importantes sin darse cuenta.",
    controles: [
      "Usar validaciones matemáticas invisibles que alertan inmediatamente si un archivo fue modificado.",
      "Guardar un registro automático y detallado de quién hizo un cambio, cuándo lo hizo y qué modificó.",
      "Exigir firmas electrónicas para asegurar que un documento viene de quien dice ser y no es falso."
    ]
  },
  { 
    id: 3, 
    pilar: "Disponibilidad", 
    icono: "⚡",
    descripcion: "Asegura que los sistemas y datos estén accesibles para los usuarios autorizados en el momento que lo requieran.",
    analogia: "Como un cajero automático: de nada sirve que el dinero esté seguro si el cajero está apagado cuando vas a retirar.",
    amenaza: "Que los servidores de la empresa se apaguen por cortes de energía, daños físicos o por ataques masivos diseñados para colapsar la página web.",
    controles: [
      "Tener equipos y sistemas duplicados listos para encenderse automáticamente si el principal llega a fallar.",
      "Hacer copias de seguridad periódicas de todo el sistema y guardarlas de forma segura fuera de la empresa.",
      "Crear manuales de emergencia con pasos claros sobre qué hacer para volver a funcionar rápido tras un desastre."
    ]
  }
];

app.get('/api/triada', (req, res) => {
  res.json(triadaData);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));