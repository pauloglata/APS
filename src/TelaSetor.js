package teste;

import  javax.swing.*;

public class TelaSetor extends JFrame {


    public TelaSetor() {
        initComponents();
    }
    
   
    private JButton add;
    private JButton seacher;
    private JButton edit;
    private JButton delete;
    
    private JLabel title;
    private JLabel Logo;
    
    private JTextField text;
    
    private JSeparator bottom;
    private JSeparator rightSide;
    private JSeparator leftSide;
    private JSeparator upperMinor;
    private JSeparator upper;
    
    private JScrollPane scrollPainel;
    
    private JTable tableSetores;


    @SuppressWarnings("unchecked")
    private void initComponents() {
    	
    	// Start layout null for background image
        getContentPane().setLayout(null);
    	// End
    	
    	// Start add
        add = new JButton();
        add.setText("ADICIONAR");
        getContentPane().add(add);
        add.setBounds(370, 380, 90, 40);
    	// End add
    	
    	// Start seacher
        seacher = new JButton();
        seacher.setText("BUSCAR");
        getContentPane().add(seacher);
        seacher.setBounds(500, 380, 90, 40);
    	// End seacher
    	
    	// Start edit
        edit = new JButton();
        edit.setText("EDITAR");
        getContentPane().add(edit);
        edit.setBounds(90, 380, 100, 40);
    	// End edit
        
    	// Start delete
        delete = new JButton();
        delete.setText("EXCLUIR");
        getContentPane().add(delete);
        delete.setBounds(230, 380, 90, 40);
    	// End delete
    	
    	// Start text
        text = new JTextField();
        getContentPane().add(text);
        text.setBounds(610, 390, 180, 30);
    	// End text
            	
    	// Start upperMinor
        upperMinor = new JSeparator();
        getContentPane().add(upperMinor);
        upperMinor.setBounds(20, 30, 10, 10);
    	// End upperMinor
    	
    	// Start leftSide
        leftSide = new JSeparator();
        leftSide.setOrientation(javax.swing.SwingConstants.VERTICAL);
        getContentPane().add(leftSide);
        leftSide.setBounds(20, 30, 10, 330);
    	// End leftSide
    	
    	// Start upper
        upper = new JSeparator();
        getContentPane().add(upper);
        upper.setBounds(90, 30, 760, 10);
    	// End upper
    	
    	// Start rightSide
        rightSide = new JSeparator();
        rightSide.setOrientation(javax.swing.SwingConstants.VERTICAL);
        getContentPane().add(rightSide);
        rightSide.setBounds(850, 30, 10, 330);
    	// End rightSide
    	
    	// Start bottom
        bottom = new JSeparator();
        getContentPane().add(bottom);
        bottom.setBounds(20, 360, 830, 20);
    	// End bottom
        
        // Start title
        title = new JLabel();
        title.setText("SETORES");
        getContentPane().add(title);
        title.setBounds(40, 20, 60, 20);
        // End
        
        // Start
        tableSetores = new JTable();
        tableSetores.setModel(new javax.swing.table.DefaultTableModel(
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
        // End

        // Start scrollPainel
        scrollPainel = new JScrollPane();
        scrollPainel.setViewportView(tableSetores);
        getContentPane().add(scrollPainel);
        scrollPainel.setBounds(60, 60, 750, 280);
        // End scrollPainel
        
//        // Start Logo
//        Logo = new JLabel();
//        Logo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagens/Tela-princiapal.PNG"))); // NOI18N
//        Logo.setIconTextGap(5);
//        getContentPane().add(Logo);
//        Logo.setBounds(0, 0, 860, 458);
//        //End Logo

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

    }


    public static void main(String args[]) {

    try {
    for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
    if ("Nimbus".equals(info.getName())) {
    javax.swing.UIManager.setLookAndFeel(info.getClassName());
    break;
}
}
} catch (ClassNotFoundException ex) {
    java.util.logging.Logger.getLogger(TelaSetor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
} catch (InstantiationException ex) {
    java.util.logging.Logger.getLogger(TelaSetor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
} catch (IllegalAccessException ex) {
    java.util.logging.Logger.getLogger(TelaSetor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
} catch (javax.swing.UnsupportedLookAndFeelException ex) {
    java.util.logging.Logger.getLogger(TelaSetor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
}

java.awt.EventQueue.invokeLater(new Runnable() {
    public void run() {
        new TelaSetor().setVisible(true);
    }
});
}


}
