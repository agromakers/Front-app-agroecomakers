export interface FincaInterface{
    nombre_finca : string;
    pais : string;
    departamento : string;
    municipio : string;
    coordenadas_finca : string;
    distancia_senal : string;
    total_trabajadores : number;
    numero_jornaleros : number;
    numero_discapacidad : number;
    numero_afro : number;
    numero_migrante : number;
    numero_indigena : number;
    origen_agua : string;
    almacenamiento_agua : string;
    riego_agua : string;
    control_agua : string;
    terrazas_agua : string;
    residuos_agua : string;
    coordenadas_entrega : string;
    acceso_entrega : string;
    diversidad_insectos : string;
    color_insectos : string;
    peso_insectos : string;
    trampa_insectos : string;
    unidades_funcionales: string[];
}