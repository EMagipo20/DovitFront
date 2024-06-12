import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'home',
        icon: 'fal fa-home',
        label: 'Inicio'
    },
    {
        routeLink: 'gestiones',
        icon: 'fal fa-users-cog',
        label: 'Gestión de registro',
        items: [
            {
                routeLink: 'gestiones/nuevo-registro',
                icon: 'fal fa-user-plus',
                label: 'Nuevo registro'
            },
            {
                routeLink: 'gestiones/actualizar-registro',
                icon: 'fal fa-user-edit',
                label: 'Actualizar registro'
            }
        ]
    },
    {
        routeLink: 'donaciones',
        icon: 'fal fa-donate',
        label: 'Donaciones',
        items: [
            {
                routeLink: 'donaciones/mis-donaciones',
                icon: 'fal fa-donation',
                label: 'Mis donaciones'
            },
            {
                routeLink: 'donaciones/nueva-donacion',
                icon: 'fal fa-plus-circle',
                label: 'Nueva donación'
            }
        ]
    },
    {
        routeLink: 'comentarios',
        icon: 'fal fa-comments',
        label: 'Comentarios',
        items: [
            {
                routeLink: 'comentarios/mis-comentarios',
                icon: 'fal fa-comment-alt',
                label: 'Mis comentarios'
            },
            {
                routeLink: 'comentarios/nuevo-comentario',
                icon: 'fal fa-comment-dots',
                label: 'Nuevo comentario'
            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Soporte',
        items: [
            {
                routeLink: 'settings/configurar-perfil',
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
