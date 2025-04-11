function sumSeries(n) {
  let series = [1];
  if (n > 0) {
    for (let i = 2; i <= n; i++) {
      series.push(series[i - 1] + series[i]);
    }
  }
  return series;
}

console.log(sumSeries(5));
