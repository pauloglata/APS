package teste;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class TelaVenda extends JFrame implements ActionListener {
	
	private JButton add;
	private JButton search;
	private JButton edit;
	private JButton delete;
	
	private JSeparator bottom;
	private JSeparator rightSide;
	private JSeparator leftSide;
	private JSeparator upperMinor;
	private JSeparator upper;
	
	private JTextField text;
	private JLabel title;
	
	private JTable tableVendas;
	private JScrollPane scrollPainel;
	private JLabel logo;

    public TelaVenda() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    private void initComponents() {
    	
    	// Home layout null for background image 
        getContentPane().setLayout(null);
    	// End 
    	
    	// Home add
    	add = new JButton();
    	add.setText("ADICIONAR");
        getContentPane().add(add);
        add.setBounds(370, 380, 110, 40);
    	// End add
    	
    	// Home search
        search = new JButton();
        search.setText("BUSCAR");
        getContentPane().add(search);
        search.setBounds(500, 380, 90, 40);
    	// End search
    	
    	// Home edit
        edit = new javax.swing.JButton();
        edit.setText("EDITAR");
        getContentPane().add(edit);
        edit.setBounds(90, 380, 100, 40);
    	// End edit
    	
    	// Home delete
        delete = new javax.swing.JButton();
        delete.setText("EXCLUIR");
        getContentPane().add(delete);
        delete.setBounds(230, 380, 90, 40);
    	// End delete
    	
    	// Home bottom
        bottom = new javax.swing.JSeparator();
        getContentPane().add(bottom);
        bottom.setBounds(20, 360, 830, 20);
    	// End bottom
    	
    	// Home rightSide
        rightSide = new javax.swing.JSeparator();
        rightSide.setOrientation(javax.swing.SwingConstants.VERTICAL);
        getContentPane().add(rightSide);
        rightSide.setBounds(850, 30, 10, 330);
    	// End rightSide
    	
    	// Home leftSide
        leftSide = new javax.swing.JSeparator();
        leftSide.setOrientation(javax.swing.SwingConstants.VERTICAL);
        getContentPane().add(leftSide);
        leftSide.setBounds(20, 30, 10, 330);
    	// End leftSide
    	
    	// Home upperMinor
        upperMinor = new javax.swing.JSeparator();
        getContentPane().add(upperMinor);
        upperMinor.setBounds(20, 30, 10, 10);
    	// End upperMinor
    	
    	// Home upper
        upper = new javax.swing.JSeparator();
        getContentPane().add(upper);
        upper.setBounds(90, 30, 760, 10);
    	// End  upper
    	
    	// Home text
        text = new javax.swing.JTextField();
        getContentPane().add(text);
        text.setBounds(610, 390, 180, 30);
    	// End text
    	
    	// Home title
        title = new javax.swing.JLabel();
        title.setText("VENDAS");
        getContentPane().add(title);
        title.setBounds(40, 20, 60, 20);
    	// End title
    	
    	// Home tableVendas
        tableVendas = new JTable();

        tableVendas.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null},
            {null, null, null, null, null}
        },
        new String [] {
            "ID", "Nome", "CPF", "Telefone", "Data de Nascimento"
        }
    ));
        // End tableVendas
    	
    	// Home scrollPainel
        scrollPainel = new javax.swing.JScrollPane();
        scrollPainel.setViewportView(tableVendas);
        getContentPane().add(scrollPainel);
        scrollPainel.setBounds(60, 60, 750, 280);
    	// End scrollPainel
    	
    	// Home logo
        logo = new javax.swing.JLabel();
        logo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Tela-princiapal.PNG"))); // NOI18N
        logo.setIconTextGap(5);
        getContentPane().add(logo);
        logo.setBounds(0, 0, 860, 458);
    	// End logo
    }


    public static void main(String args[]) {

//    try {
//    for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
//    if ("Nimbus".equals(info.getName())) {
//    javax.swing.UIManager.setLookAndFeel(info.getClassName());
//    break;
//}
//}
//} catch (ClassNotFoundException ex) {
//    java.util.logging.Logger.getLogger(TelaVenda.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//} catch (InstantiationException ex) {
//    java.util.logging.Logger.getLogger(TelaVenda.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//} catch (IllegalAccessException ex) {
//    java.util.logging.Logger.getLogger(TelaVenda.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//} catch (javax.swing.UnsupportedLookAndFeelException ex) {
//    java.util.logging.Logger.getLogger(TelaVenda.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//}

    	TelaVenda tve = new TelaVenda();
    	tve.setDefaultCloseOperation(EXIT_ON_CLOSE);
    	tve.pack();
		tve.setSize(876, 498);
    	tve.setVisible(true);
}


	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		
	}

}
