import {createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    direction: 'rtl',
    palette: {
        primary:{
            light: '#77e4e1',
            main: '#2F6D80',
            dark: '#2B4560',
        },
        secondary:{
            light: '#F8AFA6',
            main: '#F79489',
            dark: '#E98973',
            contrastText: '#F79489',
        },
        gray:{
            main: '#B1B1B1',
            dark: '#8d8c8c'
        },
        defaultBack:{
            light: '#e0e7e7'
        }
    },
    typography: {
        fontFamily: 'IRANYekan',
        h1:{
            fontSize: '28px',
        },
        body1:{
            fontSize: '14px',
            fontWeight: '400 !important'
        },
        body2:{
            fontSize: '14px',
            direction: 'rtl'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                root:{
                    fontSize: '14px',
                }
            }
          },
        MuiInputAdornment:{
            styleOverrides:{
                root:{
                    '&:not(.MuiInputAdornment-hiddenLabel)':{
                        margin: '16px',
                    }
                },
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: '#fff',
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    fontWeight: 700,
                    fontSize: '14px',
                    marginLeft: '5px',
                    boxShadow: 'none'
                },
            }
        },
        MuiCard:{
            styleOverrides:{
                root:{
                    boxShadow: 'none',
                    width: '100%',
                    margin: '16px',
                    borderRadius: '16px',
                }
            }
        },
        MuiCardHeader:{
            styleOverrides:{
                root:{
                    width: '100%',
                    margin: '0px',
                },
                title:{
                    fontSize: '18px',
                }
            }
        },
        MuiCardContent:{
            styleOverrides:{
                root:{
                    paddingTop: '0px',
                    paddingBottom: '0px !important'
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                    margin: '2px',
                },
                deleteIcon:{
                    marginLeft: '4px',
                }
            }
        },
        MuiFilledInput:{
            styleOverrides:{
                root:{
                    border: '0px solid',
                    borderRadius: '20px',
                    margin: '0px 16px',
                    '&::before':{
                        borderBottom: 'none',
                    },
                    '&::after':{
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled)':{
                        '&::before':{
                            borderBottom: 'none',
                        },
                    }
                },
                input:{
                    padding:'4px 8px'
                }
            }
        },
        MuiFormControl:{
            styleOverrides:{
                root:{
                }
            }
        },
        MuiList:{
            styleOverrides:{
                root:{
                    paddingTop: '0px'
                }
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    paddingLeft: '0px'
                }
            }
        },
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    fontWeight: 500,
                    fontSize: '14px'
                }
            }
        },
        MuiCircularProgress:{
            styleOverrides:{
                
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    fontWeight: 700
                }
            }
        },
        MuiTabPanel:{
            styleOverrides:{
                root:{
                    padding: 0,
                }
            }
        },
        MuiTable:{
            styleOverrides:{
                root:{
                    
                }
            }
        },
        MuiTableCell:{
            styleOverrides:{
                root:{
                    // borderBottom: 'none',
                    padding: '4px 8px',
                    '&:first-child': {
                        fontWeight: '700',
                    }
                },
                head:{
                    fontWeight: '700',
                    color: 'gray',
                }
            }
        },
        MuiTableRow:{
            styleOverrides:{
                'root':{
                    cursor: 'pointer',
                    border: '0px solid',
                    borderBottom: '1px solid gray',
                },
            }
        },
        MuiTablePagination:{
            styleOverrides:{
                root:{
                    display: 'flex',
                    justifyContent: 'flex-start',
                },
                displayedRows:{
                    display: 'none',
                }
            }
        }
    },
});
export default defaultTheme;