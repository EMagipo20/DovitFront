import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'inicio',
        icon: 'fal fa-home',
        label: 'Inicio'
    },
    {
        routeLink: 'gestiones',
        icon: 'fal fa-users-cog',
        label: 'Gestión de registro',
        items: [
            {
                routeLink: 'gestiones/nuevo',
                icon: 'fal fa-user-plus',
                label: 'Nuevo registro'
            },
            {
                routeLink: 'gestiones/actualizar',
                icon: 'fal fa-user-edit',
                label: 'Actualizar registro'
            }
        ]
    },
    {
        routeLink: 'proyectos',
        icon: 'fal fa-donate',
        label: 'Proyectos',
        items: [
            {
                routeLink: 'proyectos/nuevo-proyecto',
                icon: 'fal fa-plus-circle',
                label: 'Nuevo proyecto'
            },
            {
                routeLink: 'proyectos/mis-proyectos',
                icon: 'fal fa-project-diagram',
                label: 'Mis proyectos'
            }
        ]
    },
    {
        routeLink: 'foros',
        icon: 'fal fa-comments',
        label: 'Foros',
        items: [
            {
                routeLink: 'foros/foros-lista',
                icon: 'fal fa-list-alt',
                label: 'Foros'
            },
            {
                routeLink: 'foros/nuevo-post',
                icon: 'fal fa-plus-circle',
                label: 'Nuevo post'
            },
            {
                routeLink: 'foros/mis-posts',
                icon: 'fal fa-sticky-note',
                label: 'Mis posts'
            }
        ]
    },
    {
        routeLink: 'configuraciones',
        icon: 'fal fa-cog',
        label: 'Soporte',
        items: [
            {
                routeLink: 'configuraciones/mi-perfil',
                icon: 'fal fa-user-cog',
                label: 'Configurar perfil'
            }
        ]
    },
    {
        routeLink: 'cerrar-sesion',
        icon: 'fal fa-sign-out-alt',
        label: 'Cerrar sesión'
    },
];
