from flask import Flask, render_template, request, redirect, Response, jsonify
import pandas as pd
import os

app = Flask(__name__)
CSV_PATH = 'dados_kpi.csv'

@app.route('/')
def index():
    if os.path.exists(CSV_PATH):
        try:
            dados = pd.read_csv(CSV_PATH)
        except pd.errors.EmptyDataError:
            dados = pd.DataFrame()
    else:
        dados = pd.DataFrame()
    return render_template('form.html', dados=dados)

@app.route('/enviar', methods=['POST'])
def enviar():
    if request.method == 'POST':
        novo_dado = {
            'Indicador (KPI)': request.form['kpi'],
            'Objetivo Estratégico': request.form['objetivo'],
            'Perspectiva': request.form['perspectiva'],
            'Valor': float(request.form['valor']),
            'Responsável': request.form['responsavel'],
            'Unidade': request.form['unidade'],
            'Observações': request.form['observacoes']
        }

        if os.path.exists(CSV_PATH):
            try:
                df = pd.read_csv(CSV_PATH)
            except pd.errors.EmptyDataError:
                df = pd.DataFrame()
            df = pd.concat([df, pd.DataFrame([novo_dado])], ignore_index=True)
        else:
            df = pd.DataFrame([novo_dado])

        df.to_csv(CSV_PATH, index=False)
        return redirect('/')

@app.route('/dados')
def dados():
    if os.path.exists(CSV_PATH):
        try:
            df = pd.read_csv(CSV_PATH)
            return Response(df.to_csv(index=False), mimetype='text/csv')
        except pd.errors.EmptyDataError:
            return "CSV vazio"
    return "Arquivo não encontrado"

@app.route('/limpar_tabela', methods=['POST'])
def limpar_tabela():
    try:
        if os.path.exists(CSV_PATH):
            os.remove(CSV_PATH)  # Remove o arquivo CSV
            return jsonify({"message": "Tabela limpa com sucesso!"}), 200
        else:
            return jsonify({"message": "Arquivo não encontrado para limpeza."}), 400
    except Exception as e:
        return jsonify({"message": f"Ocorreu um erro ao limpar a tabela: {str(e)}"}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
