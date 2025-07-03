# mis-librerias-js
Objetivo: Crear una librería JavaScript funcional (sin componentes visuales) y documentar su implementación en un repositorio de GitHub.
								
					TECNOLÓGICO NACIONAL DE MEXICO
	
                 			INSTITUTO TECNOLÓGICO DE OAXACA			

				Departamento de Ingeniería en Sistemas Computacionales

				Materia: Desarrollo De Software Para La Toma De Decisiones
       
				“Librería Enlace de repositorio de Github y/o GitHub Pages”

					Profesor: Martinez Nieto Adelina
		
			Equipo: 
				Ramos Jimenéz Xóchitl Itahy
				Varela Vera  Biani Bisalua

			Grupo:   VSI
					Oaxaca, Oaxaca, a 03 de julio de 2025.



--------------------------------------------------------------------------------------------------------------------------------------------------------------------
NOMBRE DE LA LIBRERIA:

impuestos.js

DESCRIPCIÓN:

La librería impuestos.js está diseñada para facilitar el cálculo de obligaciones fiscales y la generación de claves seguras en aplicaciones web o sistemas administrativos. Esta librería automatiza y simplifica operaciones comunes relacionadas con impuestos y seguridad, como:

Cálculo de IVA: Obtiene el monto del impuesto al valor agregado y el total con IVA incluido.
Cálculo de ISR: Determina el impuesto sobre la renta y el ingreso neto.
Generador de claves seguras: Crea contraseñas aleatorias seguras usando letras, números y símbolos.
Cálculo de impuesto predial: Calcula el pago de predial con base en el valor catastral y una tasa establecida.
Cálculo de tenencia vehicular: Determina el monto de tenencia considerando el valor y año del automóvil.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

¿Qué problema resuelve?

impuestos resuelve la necesidad de contar con una solución unificada, reutilizable y confiable para operaciones fiscales comunes, especialmente útil en sistemas contables, formularios de gobierno, aplicaciones financieras o simuladores de trámites.

INSTALACIÓN: 

Puedes incluir la librería en tu proyecto HTML de dos formas:

🔹 Opción 1: Descarga directa
Guarda el archivo impuestos.js en tu carpeta /js/ y luego inclúyelo así:
<script src="libreria/impuestos.js"></script>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Uso. 

	<!DOCTYPE html>
	<html lang="es">
	<head>
	    <meta charset="UTF-8">
	    <title>Calculadora de IVA</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <!-- Bootstrap CSS -->
	    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body class="bg-light">
	    <div class="container py-5">
	        <div class="row justify-content-center">
	            <div class="col-md-6">
	                <div class="card shadow">
	                    <div class="card-header bg-primary text-white">
	                        <h4 class="mb-0">Calculadora de IVA</h4>
	                    </div>
	                    <div class="card-body">
	                        <form id="ivaForm">
	                            <div class="mb-3">
	                                <label for="precio" class="form-label">Precio sin IVA</label>
	                                <input type="number" class="form-control" id="precio" placeholder="Introduce el precio" min="0" step="0.01" required>
	                            </div>
	                            <div class="mb-3">
	                                <label for="iva" class="form-label">Porcentaje de IVA (%)</label>
	                                <input type="number" class="form-control" id="iva" value="21" min="0" step="0.01" required>
	                            </div>
	                            <button type="submit" class="btn btn-success w-100">Calcular</button>
	                        </form>
	                        <div class="mt-4" id="resultado" style="display:none;">
	                            <h5>Resultados:</h5>
	                            <p>IVA Calculado: $<span id="ivaCalculado"></span></p>
	                            <p>Total con IVA: $<span id="totalCalculado"></span></p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	<script src="librerias/impuestosLib.js"></script>
	<script src="js/funcionesLib1.js"></script>
	<!-- Bootstrap JS -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
	</body>
	</html>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
	CAPTURAS DE PANTALLA:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/03d6e7f8-1b8a-4710-977b-bcfc24f80887)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/adcb477e-08af-4557-9618-092789f838fa)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/cb4b2fae-5cc7-4a9c-807e-77e3b8ab3901)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/dc2d36be-9343-49f8-8e6f-634e72b74daf)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

https://github.com/user-attachments/assets/18c7d3d2-fefd-4ac3-86c4-e8f4b0efd28a



