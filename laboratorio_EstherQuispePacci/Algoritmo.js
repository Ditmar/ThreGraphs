function dijkstra(graph, nodoInicial) {
    const numNodos = graph.length;
    const distancias = new Array(numNodos).fill(Number.POSITIVE_INFINITY);
    const permanentes = new Array(numNodos).fill(false);
    distancias[nodoInicial] = 0;
  
    for (let count = 0; count < numNodos - 1; count++) {
      const u = minimaDistancia(distancias, permanentes);
      permanentes[u] = true;
  
      for (let v = 0; v < numNodos; v++) {
        if (!permanentes[v] && graph[u][v] !== 0 && distancias[u] !== Number.POSITIVE_INFINITY &&
            distancias[u] + graph[u][v] < distancias[v]) {
          distancias[v] = distancias[u] + graph[u][v];
        }
      }
    }
  
    return distancias;
  }
  
  function minimaDistancia(distancias, permanentes) {
    let min = Number.POSITIVE_INFINITY;
    let indiceMin = -1;
  
    for (let i = 0; i < distancias.length; i++) {
      if (!permanentes[i] && distancias[i] <= min) {
        min = distancias[i];
        indiceMin = i;
      }
    }
  
    return indiceMin;
  }
  
  //Ejercicio de ejemplo para comprobar.
  const arreglo = [
    [0, 26, 0, 0, 0, 0, 0, 16, 0],
    [26, 0, 15, 0, 0, 0, 0, 8, 0],
    [0, 15, 0, 6, 0, 29, 0, 0, 11],
    [0, 0, 6, 0, 13, 30, 0, 0, 0],
    [0, 0, 0, 13, 0, 23, 0, 0, 0],
    [0, 0, 29, 30, 23, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 27, 10],
    [16, 8, 0, 0, 0, 0, 27, 0, 3],
    [0, 0, 11, 0, 0, 0, 10, 3, 0]
  ];
  
  const nodoInicial = 0;
  const distanciasMasCortas = dijkstra(arreglo, nodoInicial);
  console.log("Distancias más cortas desde el nodo", nodoInicial, ": ", distanciasMasCortas);
  