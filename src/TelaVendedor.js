package teste;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class TelaVendedor extends JFrame implements ActionListener {
	
	private JButton add;
	private JButton search;
	private JButton edit;
	private JButton delete;
	
	private JTextField text;
		
	private JSeparator bottom;
	private JSeparator rightSide;
	private JSeparator leftSide;
	private JSeparator upperMinor;
	private JSeparator upper;
	
	private JLabel title;
	private JLabel logo;
	
	private JTable tableVendedor;
	private JScrollPane scrollPainel;
		
	
	private javax.swing.JLabel jLabelTelaPrincipal;
	
	

    public TelaVendedor() {
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
        add.setBounds(370, 380, 100, 40);
    	// End add
    	
    	// Home search
        search = new JButton();
        search.setText("BUSCAR");
        getContentPane().add(search);
        search.setBounds(500, 380, 90, 40);
    	// End
    	
    	// Home edit
        edit = new JButton();
        edit.setText("EDITAR");
        getContentPane().add(edit);
        edit.setBounds(90, 380, 100, 40);
    	// End edit
    	
    	// Home delete
        delete = new JButton();
        delete.setText("EXCLUIR");
        getContentPane().add(delete);
        delete.setBounds(230, 380, 90, 40);
    	// End delete
    	
    	// Home bottom
        bottom = new JSeparator();
        getContentPane().add(bottom);
        bottom.setBounds(20, 360, 830, 20);
    	// End bottom
    	
    	// Home rightSide
        rightSide = new JSeparator();
        rightSide.setOrientation(javax.swing.SwingConstants.VERTICAL);
        getContentPane().add(rightSide);
        rightSide.setBounds(850, 30, 10, 330);
    	// End rightSide
    	
    	// Home leftSide
        leftSide = new JSeparator();
        leftSide.setOrientation(javax.swing.SwingConstants.VERTICAL);
        getContentPane().add(leftSide);
        leftSide.setBounds(20, 30, 10, 330);
    	// End leftSide
    	
    	// Home upperMinor
        upperMinor = new JSeparator();
        getContentPane().add(upperMinor);
        upperMinor.setBounds(20, 30, 10, 10);
    	// End upperMinor
    	
    	// Home upper
        upper = new JSeparator();
        getContentPane().add(upper);
        upper.setBounds(125, 30, 725, 10);
    	// End upper
    	
    	// Home text
        text = new JTextField();
        getContentPane().add(text);
        text.setBounds(610, 390, 180, 30);
    	// End text
    	
    	// Home title
        title = new javax.swing.JLabel();
        title.setText("VENDEDORES");
        getContentPane().add(title);
        title.setBounds(40, 20, 80, 20);

    	// Home tableVendedor
        tableVendedor = new JTable();

        tableVendedor.setModel(new javax.swing.table.DefaultTableModel(
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
    	// End tableVendedor

        
    	// Home scrollPainel
        scrollPainel = new JScrollPane();
        scrollPainel.setViewportView(tableVendedor);
        getContentPane().add(scrollPainel);
        scrollPainel.setBounds(60, 60, 750, 280);
    	// End scrollPainel
 
    	// Home logo
        logo = new JLabel();
        logo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Tela-princiapal.PNG"))); // NOI18N
        logo.setIconTextGap(5);
        getContentPane().add(logo);
        logo.setBounds(0, 0, 860, 458);
    	// End logo
    }


    public static void main(String args[]) {
    	
    	TelaVendedor tv = new TelaVendedor();
    	tv.setDefaultCloseOperation(EXIT_ON_CLOSE);
    	tv.pack();
		tv.setSize(876, 498);
    	tv.setVisible(true);
    	
    	// Option in table 

//    try {
//    for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
//    if ("Nimbus".equals(info.getName())) {
//    javax.swing.UIManager.setLookAndFeel(info.getClassName());
//    break;
//}
//}
//} catch (ClassNotFoundException ex) {
//    java.util.logging.Logger.getLogger(TelaVendedor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//} catch (InstantiationException ex) {
//    java.util.logging.Logger.getLogger(TelaVendedor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//} catch (IllegalAccessException ex) {
//    java.util.logging.Logger.getLogger(TelaVendedor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//} catch (javax.swing.UnsupportedLookAndFeelException ex) {
//    java.util.logging.Logger.getLogger(TelaVendedor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
//}

//java.awt.EventQueue.invokeLater(new Runnable() {
//    public void run() {
//        new TelaVendedor().setVisible(true);
//    } 
//});
}


@Override
public void actionPerformed(ActionEvent e) {
	// TODO Auto-generated method stub
	
}
}
